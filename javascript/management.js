document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value
    };
  
    fetch('http://localhost/your_project/api/create_user.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      loadUsers();
    });
  });
  
  function loadUsers() {
    fetch('http://localhost/your_project/api/get_users.php')
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `${user.username} - ${user.email}`;
          userList.appendChild(li);
        });
      });
  }
  
  window.onload = loadUsers;
  