import { AppState } from '../../store/';
import { AgendaEventCategory } from '../../datadbSchema';

export function getSelectedCategory(state: AppState): AgendaEventCategory {
  return state.activeCategroy;
}
