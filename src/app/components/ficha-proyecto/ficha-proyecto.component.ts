import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { MapService } from 'src/app/common/services/map.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ficha-proyecto',
  templateUrl: './ficha-proyecto.component.html',
  styleUrls: ['./ficha-proyecto.component.css']
})
export class FichaProyectoComponent implements OnInit   {

  private idProyecto:any;
  private proyecto:any;
  private mapUrl= "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mapService:MapService
  ) {
  }
  

  ngOnInit(): void {
    this.idProyecto = this.activatedRoute.snapshot.paramMap.get('idProyecto')!;

    this.mapService.consultarProyecto(this.idProyecto).then((response:any)=>{
      console.log("response", response);
      this.proyecto = response;
      const xmin = this.proyecto.LONGITUD -1;
      const xmax = this.proyecto.LONGITUD +1;
      const ymin = this.proyecto.LATITUD -1;
      const ymax = this.proyecto.LATITUD +1;
      this.mapUrl+=`https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/export?bbox=${xmin},${ymin},${xmax},${ymax}&bboxSR=4326&layers=&layerDefs=&size=150%2C220&imageSR=4326&historicMoment=&format=png&transparent=false&dpi=&time=&timeRelation=esriTimeRelationOverlaps&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=10000&rotation=&datumTransformations=&layerParameterValues=&mapRangeValues=&layerRangeValues=&clipping=&spatialFilter=&f=image`;
      this.export();

    }).catch((error:any)=>{
      console.log("error", error);
    });
  }

  public export(): void {

    const docDefinition: any = {
      pageSize: 'LETTER',
      pageMargins: [30, 130, 30, 30],
      header: {
        columns: [
          { image: 'logo', width: 150, margin: [ 50, 10, 10, 30 ] },
          { text: 'Ficha de Proyecto Inmobiliario', style: 'header', margin: [0, 30, 0, 0]}
        ],
      },
      content: [
        {
          style: 'table',
          margin: [0, 0, 0, 8], 
          table: {
            widths: [170, 170, 170], 
            margin: [0, 20, 0, 8],
            body: [
              [{text: 'Proyecto:'+this.proyecto.NOM_PROYECTO, colSpan: 2, style: 'tableHeader', fillColor: '#CCC'}, {}, {text: 'FECHA: I-2023', style: 'tableHeader', fillColor: '#CCC'}],
            ]
          }
        },
        {
          style: 'table',
          margin: [0, 0, 0, 8], 
          table: {
            widths: [170, 170, 170],
            margin: [0, 20, 0, 8],
            body: [
              [{text: 'UPL 13 TINTAL', style: 'subheader', fillColor: '#CCC'}, {text: 'Area del proy: XXXX', style: 'subheader', fillColor: '#CCC'}, {text: 'FICHA No. XXX', style: 'subheader', fillColor: '#CCC'}]
            ]
          }
        },
        {
          margin: [0, 0, 0, 8], 
          columns: [
            {
              width: 180,
              style: 'table',
              table: {
                body: [
                  [{text: 'LOCALIZACIÓN DEL PROYECTO', style: 'subheader'}],
                  [{image: 'projectMap', width: 150, height: 220, margin: [ 10, 10, 10, 10 ] }],
                  [{text: 'LINK DEL PROYECTO:', style: 'subheader'}],
                  [{text: 'http://sdp.gov.co/'}],
                ]
              },
            },
            {
              width: 5,
              text:''
            },
            {
              width: '*',
              style: 'table',
              table: {
                widths: [70, 89, 70, 89],
                body: [
                  [{text: 'PLANO No. ', style: 'subheader'}, {text: 'CU4K43/4-01a'},{text: 'LICENCIA No. ', style: 'subheader'}, {text: 'RES 07-4-1158'}],

                  [{rowSpan: 5, text: 'NORMA DE EXPEDICIÓN DE LA LICENCIA', style: 'subheader'}, {text: 'MARCO NORMATIVO', style: 'subheader'},{colSpan: 2, text: 'DECRETO DISTRITAL 190 DE 2004'}, {}],
                  [{}, {text: 'TRATAMIENTO URBANÍSTICO', style: 'subheader'},{colSpan: 2, text: 'Desarrollo'}, {}],
                  [{}, {text: '[AREA DE ACTIVIDAD', style: 'subheader'},{colSpan: 2, text: 'Área Urbana Integral, Zona Residencial y Múltiple'}, {}],
                  [{}, {text: 'FECHA DE RADICADO', style: 'subheader'},{colSpan: 2, text: '8/24/2007'}, {}],
                  [{}, {text: 'NÚMERO DE RADICADO', style: 'subheader'},{colSpan: 2, text: '07-4-1233'}, {}],

                  [{rowSpan: 2, text: 'DIRECCIÓN', style: 'subheader'}, {rowSpan: 2, text: this.proyecto.DIRECCION},{text: 'ESTADO:', style: 'subheader'}, {text: this.proyecto.ESTADO}],
                  [{}, {},{text: 'ESTRATO::', style: 'subheader'}, {text: this.proyecto.ESTRATO}],
                  [{text: 'CHIP:', style: 'subheader'}, {text: 'AAA0137ZEBR'},{text: 'MATRÍCULA INMOBILIARIA:', style: 'subheader'}, {text: '50C-260832'}]
                ]
              },
            }

          ],
        },
        {
          margin: [0, 0, 0, 8], 
          columns: [
            {
              width: 180,
              style: 'table',
              table: {
                body: [
                  [{text: 'PLANO 1', style: 'subheader'}],
                  [{image: 'default', width: 150, margin: [ 10, 10, 10, 10 ] }]
                ]
              },
            },
            {
              width: 5,
              text:''
            },
            {
              width: '*',
              style: 'table',
              table: {
                widths: [185, 150],
                body: [
                  [{colSpan:2, text: 'CONDICIONES URBANÍSTICAS', style: 'header', fillColor: '#CCC'}, {}],
                  [{text: 'ÁREA BRUTA (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '228072.17'}],
                  [{text: 'ÁREA NO URBANIZABLE-RESERVAS (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '6802.72'}],
                  [{text: 'ÁREA NETA TODAS LAS ETAPAS LICENCIADAS (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '433,794.65'}],
                  [{text: 'CESIONES DE MALLA VIAL (Contro Ambiental y vias) (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '41,023.55'}],
                  [{text: 'CESION EQUIPAMIENTO', style: 'subheader', fillColor: '#CCC'}, {text: '17003.12'}],
                  [{text: 'CESION ESPACIO PÚBLICO', style: 'subheader', fillColor: '#CCC'}, {text: '36,298.28'}],
                ]
              },
            }

          ],
        },
        {
          margin: [0, 0, 0, 8], 
          columns: [
            {
              width: 180,
              style: 'table',
              table: {
                body: [
                  [{text: 'PLANO 2', style: 'subheader'}],
                  [{image: 'default', width: 150, margin: [ 10, 10, 10, 10 ] }]
                ]
              },
            },
            {
              width: 5,
              text:''
            },
            {
              width: '*',
              style: 'table',
              table: {
                widths: [185, 150],
                body: [
                  [{text: 'COMPESACIÓN EN DINERO', style: 'subheader', fillColor: '#CCC'}, {text: 'N/A'}],
                  [{text: 'ÁREA ÚTIL', style: 'subheader', fillColor: '#CCC'}, {text: '127730.48'}],
                  [{text: 'INDICE DE CONSTRUCCION', style: 'subheader', fillColor: '#CCC'}, {text: '0.91'}],
                  [{text: 'VIVIENDA (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '197171.74'}],
                  [{text: 'NO VIS (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '0'}],
                  [{text: 'VIS (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '0'}],
                  [{text: 'VIP (M2)', style: 'subheader', fillColor: '#CCC'}, {text: '0'}],
                  [{text: 'COMERCIO Y SERVICIOS', style: 'subheader', fillColor: '#CCC'}, {text: '1755.55'}],
                  [{text: 'DOTACIONAL', style: 'subheader', fillColor: '#CCC'}, {text: '0'}],
                  [{text: 'INDUSTRIA', style: 'subheader', fillColor: '#CCC'}, {text: '0'}],
                  [{text: 'DENSIDAD POBLACIONAL', style: 'subheader', fillColor: '#CCC'}, {text: 'Resultante'}]
                ]
              },
            }

          ],
        }
      ],
      images: {
        projectMap: this.mapUrl,
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADDCAMAAADeBI/9AAAANlBMVEXd3d2Hh4ecnJyWlpbHx8eysrLY2NiRkZGLi4uhoaG3t7e8vLysrKzCwsLS0tLNzc2zs7Ofn58kJ6mcAAAEKElEQVR4nO2bi5KjIBBFBRRQQDP//7NLNz5IJmsmZnYV6p6qScZOTHFK5GXTNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgvzIYcRAznF32V/ijaoQ/u/T7DJ+4CXHta3e4TibM2eXfJZVRHSCdeXb5d6EC2nDkzGCLkJPHTlU1y0nInclbcqO73YJejqqS056bkHVcUpOclkvnNo9LapLrt677xoGK5NpsXGJHilQkdzfA5tuuIjmVy/UUqUjO1Cwnczm/Rv5t6T7k2D3nKFKR3JS5GR6lVCSXXzq+cOXK3Yzx+iG29uKpDy9Wjq+SfLRz1B1Y2c6HhcoNWYN/RxvCtB6UKdfavMX/K0XKjVt/3e2dWqKczrvrvXXJEuWyqc3a6jOP7UuBcg9L0Ouy3yRtf69XnlwQD9jU8jv77RIXJzfZRzlhqfHvnnQOpclp9c2NVoTCeh/mnUNpcv0Tt3uyzqEwuZ88q9s6h7Lk3A/css6hKLknjclTls6hJDn90+eQc+dQlJzcV8rtpu2EM8v+klXunQf/prBF2fce/CsaiBUj1+7LfINm6aXIjW8nNfSlyH01z0ZdL+2+ypA7lEU0lCF3kDJSNT7h7PLvAjnIXRDIQe6CVJ1MWnUacNUJ3HWn3gMAAAAAAAAAAAAAAAAAANSPk1PTyLSvbJCc7NtLzj1sghJCdbRxgjmxkEfpREtPkemRm7ache7mB3BemK5TPeX2mYLlKDNR8+NW2h4hrbTxaEzbBDXJ7W7LujBJzlP5jacczEn4QLnofk3ZLl2u660OYiI5L6bGKsqrXL6SqqXb+5WLMsu1YuhlQ3IkRoJJjl7LlgtiaIyJdTGKOTJRsUkhwUWu5GpJf46SS6JKL6hltDYGqM2sQ07LgVS0UBSl1iRevrZVLCe7yHh2Ud9nkWOkGFICzRQ7hXkX65rD3u79THnoNnJ2IQAAAPwS0i+vnnfse56eBdnx/2M6cEtk/uY6hVuiPg5evFtP5+MLjDrTVkB6lWnSxsNiI8RIs1PuuHv6P0WWby5nL1EZx2aWhmXzR1JcTk4Mc+la0dOwMQ25+HWOPMitUYpoIzK5/2/yhFxundD0QivKxfbp+rktci+3RpOcvbKcNoqLNcYKOtB8O1BNU1ZvkTu5LcrV0rqHanmS0kYuR3MYKh0VWPMdaEw08Hkkl9uiJKNobeXCcrSwJaiZoJkbVclOBJ6bbpFcbotyhCYO16qWdKPQ2s9839g4lZl49UBR8xKvC60uZJFMLotyJMTG5VpynejboGhOxgVyUS4tb6Wm0ottwYsjSY7nqFlUirZ1Jv7K/FF6O70r4F0S1BRsCz/W8gc91ceRd7BkkbnToDlqFuVIalD4o/R2/k1HM8+Pf2OKk9fp9dcAAAAAAAAAAAAAAAAAAAAAAAD8Nn8Al4sdgB/AeOcAAAAASUVORK5CYII=',
        logo: 'data:image/png;base64,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'
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center'
        },
        subheader: {
          fontSize: 13,
          bold: true,
          alignment: 'center'
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          alignment: 'center',
          fontSize: 22,
          color: 'black'
        }
      }
    };

    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open({}, window);
  }
}
