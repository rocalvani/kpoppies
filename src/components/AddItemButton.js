const AddItemButton = ({disable, onAdd, counter}) => {

    const handleConfirm = () => {
        onAdd(counter);
      };

    return ( 
        <button
        onClick={handleConfirm}
            className="item__count--add"
            disabled={disable}
          >
            confirmar
          </button>
    )
}

export default AddItemButton;