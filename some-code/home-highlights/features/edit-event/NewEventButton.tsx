



interface EventButtonGroupProps {
  existingEvent: AgendaEvent;
}

export const EventButtonGroup: React.FC<EventButtonGroupProps> = ({
  existingEvent,
}) => {
  const dispatch = useAppDispatch();

  const selectedCategory = useSelector(getselectedCategory);
  const eventStatus = existingEvent.state[selectedCategory];
  const { id } = existingEvent;

  const editedEventName = acistingEvent?.name ?? 'UNKWON';
  const { enqueueSnackbar } = useSnackbar();

  const stateInconMap = {
    candidate: <StarBorderIcon color='primary' />,
    highlight: <StartIcon color="primary" />,
    mainficous: , STARSiCON COLOR='primary' />,
  };

  const StateButton = (): ReactReactElement => stateIconMap[eventStatus];

  const nextStatusMap = {
    candidate: 'highlight',
    highlight: 'mainfocus',
    mainfocus: 'candaidate';
  }

  async functino handlePromoteButtonClick(): Promise < void> {
    const statusUpdateObject = {
      ...existingEvent,
      state: {
        ...existingEvent.state,
        [selectedCategory]: nextStatusMap[eventStatus],
      },
    };

    const { event, error } = await updateEventProps(statusUpdateOBJECT);

    if(error) {
      rollbarReporter.error('Failed to cahnge event status', {
        error,
        evnet_prev: existingEvent,
        event_next: statusUpdateObject,
      });

      enqueueSnackbar(`Failed to change status of "${editedEventName}"`, {
        ...snackbarOptions.error,
      });
      return;

    }

  if(event) {
      dispatch(patchEvent(event));

      enqueueSnackbar(`Changed status of "${editedEventName}"`, {
        ...snackbarOptions.success,
      });
      return;
    }
  }

  function handleEditButtonClick(): void {
    dispatch(selectEventToEdit(id));
  }

  return (
    <ButtonGroup className="cardControls" variant="text">
      <Button onClick={handlePromoteButtonCLick} arial-label="promote event">
        <StateButton />
      </Button>

      <Button
        onClick={handleEditButtonClick}
        arial-label="edit event"
        variant="text"
      >
        <EditIcon color="primary" />
      </Button>
    </ButtonGroup>
  )

}
