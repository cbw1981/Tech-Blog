const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        text: newPost,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.reload();
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);