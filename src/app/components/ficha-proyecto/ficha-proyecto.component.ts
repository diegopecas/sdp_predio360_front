import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ficha-proyecto',
  templateUrl: './ficha-proyecto.component.html',
  styleUrls: ['./ficha-proyecto.component.css']
})
export class FichaProyectoComponent implements OnInit   {
  ngOnInit(): void {}

  public export(): void {

    const docDefinition: any = {
      pageSize: 'LETTER',
      pageMargins: [30, 45, 20, 30], 
      content: [
        {
          style: 'table',
          table: {
            widths: [170, 170, 170],
            body: [
              [{text: 'Proyecto SAN IGNACIO (ETAPA I)', colSpan: 2, style: 'tableHeader', fillColor: '#CCC'}, {}, {text: 'FECHA: I-2023', style: 'tableHeader', fillColor: '#CCC'}],
              [{text: 'UPL 13 TINTAL', style: 'subheader', fillColor: '#CCC'}, {text: 'Area del proy: XXXX', style: 'subheader', fillColor: '#CCC'}, {text: 'FICHA No. XXX', style: 'subheader', fillColor: '#CCC'}]
            ]
          },
          layout: 'sigleLineLayout'
        },
        {
          style: 'table',
          table: {
            widths: [170, 170, 170],
            body: [
              [{text: 'LOCALIZACIÓN DEL PROYECTO', style: 'subheader'}, {text: 'PLANO No. CU4K43/4-01'}, {text: 'LICENCIA No. RES 07-4-1158 '}],
              [{rowSpan: 5, image: 'default', width: 150, margin: [ 10, 10, 10, 10 ] }, {text: 'MARCO NORMATIVO', style: 'subheader'}, {text: 'DECRETO DISTRITAL 190 DE 2004'}],
              [{}, {text: 'TRATAMIENTO URBANÍSTICO', style: 'subheader'}, {text: 'Desarrollo'}],
              [{}, {text: 'AREA DE ACTIVIDAD', style: 'subheader'}, {text: 'Área Urbana Integral, Zona Residencial y Múltiple'}],
              [{}, {text: 'FECHA DE RADICADO', style: 'subheader'}, {text: '8/24/2007'}],
              [{}, {text: 'NÚMERO DE RADICADO', style: 'subheader'}, {text: '07-4-1233'}]
            ]
          },
          layout: 'sigleLineLayout'
        }
      ],
      images: {
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADDCAMAAADeBI/9AAAANlBMVEXd3d2Hh4ecnJyWlpbHx8eysrLY2NiRkZGLi4uhoaG3t7e8vLysrKzCwsLS0tLNzc2zs7Ofn58kJ6mcAAAEKElEQVR4nO2bi5KjIBBFBRRQQDP//7NLNz5IJmsmZnYV6p6qScZOTHFK5GXTNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgvzIYcRAznF32V/ijaoQ/u/T7DJ+4CXHta3e4TibM2eXfJZVRHSCdeXb5d6EC2nDkzGCLkJPHTlU1y0nInclbcqO73YJejqqS056bkHVcUpOclkvnNo9LapLrt677xoGK5NpsXGJHilQkdzfA5tuuIjmVy/UUqUjO1Cwnczm/Rv5t6T7k2D3nKFKR3JS5GR6lVCSXXzq+cOXK3Yzx+iG29uKpDy9Wjq+SfLRz1B1Y2c6HhcoNWYN/RxvCtB6UKdfavMX/K0XKjVt/3e2dWqKczrvrvXXJEuWyqc3a6jOP7UuBcg9L0Ouy3yRtf69XnlwQD9jU8jv77RIXJzfZRzlhqfHvnnQOpclp9c2NVoTCeh/mnUNpcv0Tt3uyzqEwuZ88q9s6h7Lk3A/css6hKLknjclTls6hJDn90+eQc+dQlJzcV8rtpu2EM8v+klXunQf/prBF2fce/CsaiBUj1+7LfINm6aXIjW8nNfSlyH01z0ZdL+2+ypA7lEU0lCF3kDJSNT7h7PLvAjnIXRDIQe6CVJ1MWnUacNUJ3HWn3gMAAAAAAAAAAAAAAAAAANSPk1PTyLSvbJCc7NtLzj1sghJCdbRxgjmxkEfpREtPkemRm7ache7mB3BemK5TPeX2mYLlKDNR8+NW2h4hrbTxaEzbBDXJ7W7LujBJzlP5jacczEn4QLnofk3ZLl2u660OYiI5L6bGKsqrXL6SqqXb+5WLMsu1YuhlQ3IkRoJJjl7LlgtiaIyJdTGKOTJRsUkhwUWu5GpJf46SS6JKL6hltDYGqM2sQ07LgVS0UBSl1iRevrZVLCe7yHh2Ud9nkWOkGFICzRQ7hXkX65rD3u79THnoNnJ2IQAAAPwS0i+vnnfse56eBdnx/2M6cEtk/uY6hVuiPg5evFtP5+MLjDrTVkB6lWnSxsNiI8RIs1PuuHv6P0WWby5nL1EZx2aWhmXzR1JcTk4Mc+la0dOwMQ25+HWOPMitUYpoIzK5/2/yhFxundD0QivKxfbp+rktci+3RpOcvbKcNoqLNcYKOtB8O1BNU1ZvkTu5LcrV0rqHanmS0kYuR3MYKh0VWPMdaEw08Hkkl9uiJKNobeXCcrSwJaiZoJkbVclOBJ6bbpFcbotyhCYO16qWdKPQ2s9839g4lZl49UBR8xKvC60uZJFMLotyJMTG5VpynejboGhOxgVyUS4tb6Wm0ottwYsjSY7nqFlUirZ1Jv7K/FF6O70r4F0S1BRsCz/W8gc91ceRd7BkkbnToDlqFuVIalD4o/R2/k1HM8+Pf2OKk9fp9dcAAAAAAAAAAAAAAAAAAAAAAAD8Nn8Al4sdgB/AeOcAAAAASUVORK5CYII='
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [60, 90, 40, 60]
        },
        subheader: {
          fontSize: 14,
          bold: true,
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

    pdfMake.createPdf(docDefinition).download("test.pdf");
  }
}
