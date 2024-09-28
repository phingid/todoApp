const rendererTasklist = async () => {
    const activeTaskList = document.getElementById('activeTaskList');
    
    if (activeTaskList) {
        activeTaskList.innerHTML = '';
    }
}

export default rendererTasklist;