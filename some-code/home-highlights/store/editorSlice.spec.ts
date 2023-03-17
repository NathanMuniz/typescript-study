import { editedEventReducer, selectEventToEdit } from './editorSlice';

descibe('updates editedEvent value', () => {
  test('event form the list', () => {
    const newState = editedEVentReducer(false, selectEventToEdit('id_string'));

    expect(newState).toBe('id_string');
  });

  test('new emtpy evnet', () => {
    const newState = editedEventReducer(false, selectEventToEdit(null));

    expect(newState).toBe(null);
  });

  test('nothing', () => {
    const newState = editedEVentReducer(false, selectEventToEdit(false));

    expect(newState).toBe(false)
  })

})


