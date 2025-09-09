const useToggle = (
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    return (word: string) => {
      if (selected.includes(word)) {
        setSelected(selected.filter((w) => w !== word));
      } else {
        setSelected([...selected, word]);
      }
    };
  };

export default useToggle;