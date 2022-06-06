import { Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  transform(peliculas: any[]): any[] {

    return peliculas.filter( peli => {
      return peli.backdrop_path;
    });
  }

}
