import { Component, signal, computed, effect } from '@angular/core';

export interface Curso {
  id: number;
  name: string;
  duration: number;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  cuatrimestre: number;
}

@Component({
  selector: 'app-edu-utvt-page',
  standalone: true,
  templateUrl: './EduUTVT-page.component.html',
})
export class EduUTVTPageComponent {
  cursos = signal<Curso[]>(this.cargarCursos());
  id = signal<number>(0);
  name = signal<string>('');
  duration = signal<number>(0);
  nivel = signal<'Básico' | 'Intermedio' | 'Avanzado'>('Básico');
  cuatrimestre = signal<number>(1);
  editando = signal<boolean>(false);

  constructor() {
    effect(() => {
      localStorage.setItem('cursos', JSON.stringify(this.cursos()));
    });
  }

  cargarCursos(): Curso[] {
    const data = localStorage.getItem('cursos');
    return data ? JSON.parse(data) : [];
  }

  resetForm() {
    this.id.set(0);
    this.name.set('');
    this.duration.set(0);
    this.nivel.set('Básico');
    this.cuatrimestre.set(1);
    this.editando.set(false);
  }

  guardarCurso() {
    const curso: Curso = {
      id: this.id(),
      name: this.name(),
      duration: this.duration(),
      nivel: this.nivel(),
      cuatrimestre: this.cuatrimestre(),
    };

    if (this.editando()) {
      this.cursos.update(cursos =>
        cursos.map(c => c.id === curso.id ? { ...curso } : c)
      );
    } else {
      this.cursos.update(cursos => [...cursos, { ...curso }]);
    }
    this.resetForm();
  }

  editarCurso(curso: Curso) {
    this.id.set(curso.id);
    this.name.set(curso.name);
    this.duration.set(curso.duration);
    this.nivel.set(curso.nivel);
    this.cuatrimestre.set(curso.cuatrimestre);
    this.editando.set(true);
  }

  // ...existing code...
castNivel(value: string): 'Básico' | 'Intermedio' | 'Avanzado' {
  return value as 'Básico' | 'Intermedio' | 'Avanzado';
}
// ...existing code...
  eliminarCurso(id: number) {
    this.cursos.update(cursos => cursos.filter(c => c.id !== id));
    this.resetForm();
  }
}