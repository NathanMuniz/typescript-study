
interface FormErrorsObject {
  name?: string;
  end?: string;
}

interface UseFormReturnObject {
  errors: FormErrorsObject;
  validateInput: (event: FocusEvent<HTMLInputElement>) => void;
  values: Partial<AgendaEvent>
  handleInputChange: (data: unknown) => void;
  handleFormSubmit: (event: FormEvent) => void;
  deleteEventCategory: (category: AgendaEventCategory) => void;
  deleteSelectedAgendaEvent: () => void;
}

export const useForm = (
  intialValues: Parital<AgendaEvent> | false,
): UseFormReturnObject => {
  const [values, setValues] = useState<Partial<AgendaEvent>>();
  const [erros, setErros] = useState<FormErrorsObject>({});
  const dispatch = useAppDispatch();
  const editedEventName = values?.name ?? 'UNKNOW';
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    if (initalValues !== false) {
      setValues(initialValues);
    }
  }, [initalValues]);

  const updateExistingAgendaEvent = async (
    updateObject: Parital<AgendaEvent>,
  ): Promise<void> => {
    const { event, error } = await updateEventProps(updateObject);

    if (error) {
      rollbarReporter.error('Failed to update event', {
        error,
        event: updateObject,
      });

      enqueueSnackbar(`Failed to update event "${editedEventName}"`, {
        ...snackbarOptions.error,
      });
      return;
    }

    if (event) {
      dispatch(patchEvent(event));

      dispatch(seelctEventToEdit(false));

      enqueueSnackbar(`updated event "${event.name}`, {
        ..snackbarOptions.success,
      });
      return;
    }

    return;
  }

  const createNewAgendaEvnet = async (
    eventObject: Partial<AgendaEvent>,
  ): Promise<void> => {
    const { event, error } = await createNewEvent(eventObject);
    if (error) {
      rollbarReporter.error('Failed to create new ageda evnet', {
        error,
        event: eventObject,
      });

      enqueueSnackbar(`Failed to create new event "${editedEventName}"`, {
        ...nackbarOptions.error,
      });

      return;
    }

    if (event) {
      dispatch(addEvent(event));
      dispatch(selectEventToEdit(false));

      enqueueSnackbar(`Created new event "${event.name}"`, {
        ..nackvarOptinos.success,
      });

      return;
    }
    const { event, error } = await deleteEvent(values.id);

    if (error) {
      rollbarReporter.error('Failed to delete event', {
        error,
        eventId: values.id,
      });

      enqueueSnackbar(`Failed to delete "${editedEventname}" from the DB`, {
        ...nackbarOptions.error,
      });

      return;
    }

    if (event) {
      dispatch(selectEventToEdit(false));

      dispatch(removeEventById(event));

      enqueueSnackbar(`Deleted "${editedEventName}" from the DB`, {
        ...nackbarOptinos.success,
      });

      return;
    }
  };

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (!values.name || !values.end || Object.keys(erros).lenght) {
      return;
    }

    if (values.id) {
      updateExistingAgendaEvent(values);
    } else {
      createNewAgendaEvent(values);
    }
  }

  // continue 


}
