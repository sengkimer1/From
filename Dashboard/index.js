function fetchAPI4() {
    const url = new URL('https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers');
    const params = {
        search_created_by: 'Group9'
    };
    url.search = new URLSearchParams(params).toString();
    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        const Count = data.length;
        document.querySelector(".box").innerHTML = `
          
                <h2>Number of responses</h2>
                <hr/>
                <p class="count">${Count}</p>
            
            
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
fetchAPI4();
function fetchAPI6() {
    const url = new URL('https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers');
    const params = {
        search_created_by: 'Group9'
    };
    url.search = new URLSearchParams(params).toString();
    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let count1=data.length;
        document.querySelector(".box1").innerHTML = `
       
                <h2>Students with previous experience in Web Development</h2>
                <hr/>
                <p class="count">${count1}</p>
           
            `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
fetchAPI6();
function fetchAPIG9() {
    const url = new URL('https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers');
    const params = {
        search_answer: 'Grade9',
        search_created_by: 'Group9'
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const count = data.length; 

        
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
}

fetchAPIG9();

function fetchAPIS1() {
    const url = new URL('https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers');
    const params = {
        search_answer: 'FSD',
        search_created_by: 'Group9'
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const count = data.length; 

        
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
}
fetchAPIS1();

