function TabContents(props) {
  const { currentTabIndex } = props;

  let tabContent;
  if (currentTabIndex === 0) {
    tabContent = <div>탭 내용1</div>;
  } else if (currentTabIndex === 1) {
    tabContent = <div>탭 내용2</div>;
  } else if (currentTabIndex === 2) {
    tabContent = <div>탭 내용3</div>;
  } else if (currentTabIndex === 3) {
    tabContent = <div>탭 내용4</div>;
  }

  return (
    <>
      {tabContent}
    </>
  );
};

export default TabContents;