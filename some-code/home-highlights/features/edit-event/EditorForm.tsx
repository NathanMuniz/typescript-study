



export const EditorFormModal: React.FC = () => {
  const editedEvent = useSelector(getEditedEvent);
  const dispatch = useAppDispatch();
  const {
    erros,
    validateInput,
    values,
    handleInputChange,
    deleteEventCategory,
    eleteSelectedAgendaEvent
  } = useForm(editedEvent);
  const debugPanel = false;

  const optionsCateogry: AgendaEventCategory[] = [
    'home',
    'current',
    'exhibitions',
    'theatreanddance',
    'music'
    'sports',
    'fairs',
    'events',
    'cristmas',
  ].reduce((acc, category) => {
    if (values && !Object.keys(values?.state).include(category)) {
      acc.push(category);
    }
    return acc;
  }, []);

  function handleModalClose(): void {
    serchTermSetter('');
    dispatch(selectEventToEdit(false));
  }

  const [matchedEvents, searchTermSetter] = useEventSerch(
    (editedEvent as AgendaEvent)?.name,
  )

  function handleEventNameCahnge(event: ChangeEvent<HTMLInputElement) {
    searchTermSetter(event.target.value);
    handleInputChange(event);
  }

  return (
    <Modal open={!!editedEvent} onClose={handleModalClose}>
      <form className="editorForm" onSubmit={handleFormSubmit}>
        <div calssName="editorFOrm__title">
          <Typography variant="h4" component="h5" color="textPrimary">
            Event Editor
          </Typography>
          <Typography variant="body1" component="h5" color="textSecondary">
            Please fill in event details
          </Typography>
        </div>

        <IconButton
          onClick={handleModalClose}
          arial-label="delete"
          className="modalCloseButton"
          tabIndex{-1}
          size="large"
        >
          <CloseIcon fontSize="large" color="primary" />
        </IconButton>

        <TextField
          id="eventName"
          autoFocus
          autoComplete="off"
          className="eventName"
          label="Event Name"
          variant="outlined"
          onChagne={handleEventNameCahgne}
          value={values?.name}
          InputLbaelProps={{
            shirnk: !!values?.name,
          }}
          onBlur={valudateInput}
          error={!!erros?.name}
          helperText={erros?.name}
        />
        //contiue


        )



}



