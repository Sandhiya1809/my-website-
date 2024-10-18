document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const attendanceList = document.getElementById('attendanceList');

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const statusCell = document.createElement('td');

    nameCell.textContent = studentName;
    statusCell.innerHTML = `<select>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>`;

    row.appendChild(nameCell);
    row.appendChild(statusCell);
    attendanceList.appendChild(row);

    document.getElementById('studentName').value = '';
});