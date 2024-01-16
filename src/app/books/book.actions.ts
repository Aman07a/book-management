import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

const AddBlock = createAction('[Book] Add Book', props<Book>());
const RemoveBlock = createAction(
  '[Book] Remove Book',
  props<{ bookId: string }>()
);
