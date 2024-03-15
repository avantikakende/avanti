// JavaScript code goes here

let groups = [];

function addGroup() {
    const groupName = document.getElementById('groupName').value;
    const memberCount = parseInt(document.getElementById('memberCount').value);

    if (groupName && !isNaN(memberCount) && memberCount > 0) {
        const newGroup = { groupName, memberCount, date: new Date(), information: "Some information" };
        groups.push(newGroup);
        displayGroups();
        resetForm();
    } else {
        alert('Please fill in all fields with valid values.');
    }
}

function displayGroups() {
    const groupTable = document.getElementById('groupTable');
    const groupList = document.getElementById('groupList');
    
    groupList.innerHTML = '';

    groups.sort((a, b) => a.groupName.localeCompare(b.groupName));

    groups.forEach(group => {
        const row = groupList.insertRow();

        const cellGroupName = row.insertCell(0);
        cellGroupName.textContent = group.groupName;

        const cellDate = row.insertCell(1);
        cellDate.textContent = group.date.toLocaleDateString(); // Format the date as needed

        const cellInformation = row.insertCell(2);
        cellInformation.textContent = group.information;

        const cellMembers = row.insertCell(3);
        cellMembers.textContent = group.memberCount;
    });
}

function resetForm() {
    document.getElementById('groupName').value = '';
    document.getElementById('memberCount').value = '';
}

function searchGroup() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const foundGroups = groups.filter(group => group.groupName.toLowerCase().includes(searchInput));

    if (foundGroups.length > 0) {
        const resultMessage = foundGroups.map(foundGroup => `Group Name: ${foundGroup.groupName}, Members: ${foundGroup.memberCount}`).join('\n');
        alert(`Groups Found:\n${resultMessage}`);
    } else {
        alert('No matching groups found.');
    }
}
