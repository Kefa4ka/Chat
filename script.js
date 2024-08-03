// Update articles section in real-time
function updateArticles() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const articleList = document.getElementById('article-list');
    
    articleList.innerHTML = ''; // Clear any existing content

    articles.forEach(article => {
        const li = document.createElement('li');
        li.classList.add('new-post');
        li.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <small>Published by: ${article.nickname} on ${article.created_at}</small>
            <button class="delete-btn" onclick="deleteArticle(${article.id}, '${article.nickname}')">Delete</button>
        `;
        articleList.appendChild(li);
    });
}

// Load articles on index.html
if (window.location.pathname.endsWith('index.html')) {
    window.onload = function() {
        updateArticles();
        setInterval(updateArticles, 5000); // Update every 5 seconds
    };
}

// Update resources section in real-time
function updateResources() {
    const resources = JSON.parse(localStorage.getItem('resources')) || [];
    const resourceList = document.getElementById('resource-list');
    
    resourceList.innerHTML = ''; // Clear any existing content

    resources.forEach(resource => {
        const li = document.createElement('li');
        li.classList.add('new-post');
        li.innerHTML = `
            <h3><a href="${resource.link}" target="_blank">${resource.title}</a></h3>
            <p>${resource.description}</p>
            <small>Added by: ${resource.nickname}</small>
            <button class="delete-btn" onclick="deleteResource(${resource.id}, '${resource.nickname}')">Delete</button>
        `;
        resourceList.appendChild(li);
    });
}

// Load resources on resources.html
if (window.location.pathname.endsWith('resources.html')) {
    window.onload = function() {
        updateResources();
        setInterval(updateResources, 5000); // Update every 5 seconds
    };
}

// Update events section in real-time
function updateEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventList = document.getElementById('event-list');
    
    eventList.innerHTML = ''; // Clear any existing content

    events.forEach(event => {
        const li = document.createElement('li');
        li.classList.add('new-post');
        li.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <small>Date: ${event.date}</small>
            <small>Posted by: ${event.nickname}</small>
            <button class="delete-btn" onclick="deleteEvent(${event.id}, '${event.nickname}')">Delete</button>
        `;
        eventList.appendChild(li);
    });
}

// Load events on events.html
if (window.location.pathname.endsWith('events.html')) {
    window.onload = function() {
        updateEvents();
        setInterval(updateEvents, 5000); // Update every 5 seconds
    };
}

// Update webinars section in real-time
function updateWebinars() {
    const webinars = JSON.parse(localStorage.getItem('webinars')) || [];
    const webinarList = document.getElementById('webinar-list');
    
    webinarList.innerHTML = ''; // Clear any existing content

    webinars.forEach(webinar => {
        const li = document.createElement('li');
        li.classList.add('new-post');
        li.innerHTML = `
            <h3><a href="${webinar.link}" target="_blank">${webinar.title}</a></h3>
            <p>${webinar.description}</p>
            <small>Date: ${webinar.date}</small>
            <small>Added by: ${webinar.nickname}</small>
            <button class="delete-btn" onclick="deleteWebinar(${webinar.id}, '${webinar.nickname}')">Delete</button>
        `;
        webinarList.appendChild(li);
    });
}

// Load webinars on webinars.html
if (window.location.pathname.endsWith('webinars.html')) {
    window.onload = function() {
        updateWebinars();
        setInterval(updateWebinars, 5000); // Update every 5 seconds
    };
}

// Handle article form submission
document.getElementById('article-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    const article = {
        id: Date.now(),  // Unique ID for deletion
        nickname: nickname,
        title: title,
        content: content,
        created_at: new Date().toLocaleString()
    };
    
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));
    
    window.location.href = 'index.html';
});

// Handle resource form submission
document.getElementById('resource-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const title = document.getElementById('resource-title').value;
    const description = document.getElementById('resource-description').value;
    const link = document.getElementById('resource-link').value;
    
    const resource = {
        id: Date.now(),  // Unique ID for deletion
        nickname: nickname,
        title: title,
        description: description,
        link: link
    };
    
    let resources = JSON.parse(localStorage.getItem('resources')) || [];
    resources.push(resource);
    localStorage.setItem('resources', JSON.stringify(resources));
    
    window.location.href = 'resources.html';
});

// Handle event form submission
document.getElementById('event-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const title = document.getElementById('event-title').value;
    const description = document.getElementById('event-description').value;
    const date = document.getElementById('event-date').value;
    
    const eventObj = {
        id: Date.now(),  // Unique ID for deletion
        nickname: nickname,
        title: title,
        description: description,
        date: date
    };
    
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventObj);
    localStorage.setItem('events', JSON.stringify(events));
    
    window.location.href = 'events.html';
});

// Handle webinar form submission
document.getElementById('webinar-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const title = document.getElementById('webinar-title').value;
    const description = document.getElementById('webinar-description').value;
    const date = document.getElementById('webinar-date').value;
    const link = document.getElementById('webinar-link').value;
    
    const webinar = {
        id: Date.now(),  // Unique ID for deletion
        nickname: nickname,
        title: title,
        description: description,
        date: date,
        link: link
    };
    
    let webinars = JSON.parse(localStorage.getItem('webinars')) || [];
    webinars.push(webinar);
    localStorage.setItem('webinars', JSON.stringify(webinars));
    
    window.location.href = 'webinars.html';
});

// Function to delete an article
function deleteArticle(id, nickname) {
    const currentNickname = prompt("Enter your nickname to confirm deletion:");
    if (currentNickname !== nickname) {
        alert("You can only delete your own posts.");
        return;
    }
    
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles = articles.filter(article => article.id !== id);
    localStorage.setItem('articles', JSON.stringify(articles));
    
    const postElement = document.querySelector(`li[data-id="${id}"]`);
    if (postElement) {
        postElement.classList.add('deleted-post');
        setTimeout(() => postElement.remove(), 1000);
    }
}

// Function to delete a resource
function deleteResource(id, nickname) {
    const currentNickname = prompt("Enter your nickname to confirm deletion:");
    if (currentNickname !== nickname) {
        alert("You can only delete your own posts.");
        return;
    }
    
    let resources = JSON.parse(localStorage.getItem('resources')) || [];
    resources = resources.filter(resource => resource.id !== id);
    localStorage.setItem('resources', JSON.stringify(resources));
    
    const postElement = document.querySelector(`li[data-id="${id}"]`);
    if (postElement) {
        postElement.classList.add('deleted-post');
        setTimeout(() => postElement.remove(), 1000);
    }
}

// Function to delete an event
function deleteEvent(id, nickname) {
    const currentNickname = prompt("Enter your nickname to confirm deletion:");
    if (currentNickname !== nickname) {
        alert("You can only delete your own posts.");
        return;
    }
    
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events = events.filter(event => event.id !== id);
    localStorage.setItem('events', JSON.stringify(events));
    
    const postElement = document.querySelector(`li[data-id="${id}"]`);
    if (postElement) {
        postElement.classList.add('deleted-post');
        setTimeout(() => postElement.remove(), 1000);
    }
}

// Function to delete a webinar
function deleteWebinar(id, nickname) {
    const currentNickname = prompt("Enter your nickname to confirm deletion:");
    if (currentNickname !== nickname) {
        alert("You can only delete your own posts.");
        return;
    }
    
    let webinars = JSON.parse(localStorage.getItem('webinars')) || [];
    webinars = webinars.filter(webinar => webinar.id !== id);
    localStorage.setItem('webinars', JSON.stringify(webinars));
    
    const postElement = document.querySelector(`li[data-id="${id}"]`);
    if (postElement) {
        postElement.classList.add('deleted-post');
        setTimeout(() => postElement.remove(), 1000);
    }
}
