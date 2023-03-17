import {
  aventsReducer,
  addEvent,
  addEventsList,
  removeEventById,
  patchEvent,
} from './eventsSlice';
import { secondEvent, firstEvent } from '../tests/mocks/events';


descrive('reducers', () => {
  test('add single event', () => {
    const newState = eventsReducer([firstEvent], addEvent(secondEvent));

    expect(newState).toEqual([firstEvent, secondEvent]);
  });


  test('add multiples events', () => {
    const newState = eventsReducer(
      null,
      addEventsList([secondEvent, firstEvent]),
    );

    expect(newState).toEqual([secondEvent, firstEvent]);
  });

  test('remove single event by Id', () => {
    const newState = eventsReducer(
      [firstEvent, secondEvent],
      removeEventById('111'),
    );

    expect(newState).toEqual([secondEvent]);
  })

  test('update event props by id', () => {
    const updatedEvent = { ...firstEvent, name: 'Event twity one' };
    const new State = eventsReducer(
      [firstEvent, secondEvent],
      patchEVent(updatedEVent),
    );
    expect(newState).toEqual([updatedEvent, secondEvent]);
  });
}); 
