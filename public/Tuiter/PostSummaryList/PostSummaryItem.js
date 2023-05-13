const PostSummaryItem = (post) => {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="me-auto px-1">
            <div class="text-muted">${post.topic}</div>
            <div class="d-flex align-items-center">
                <div class="float-start fw-bold pe-1">${post.userName}</div>
                <i class="float-start fa fa-check-circle px-1"></i>
                <div class="text-muted">- ${post.time}</div>
            </div>
            <div class="fw-bold">${post.title}</div>
            <div class="text-muted">${post.tweets}</div>
        </div>
        <img src="${post.image}"
             class="rounded-3" width="90px">
    </li>
    `
}

export default PostSummaryItem;