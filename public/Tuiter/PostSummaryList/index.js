import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
<!--    <div class="">-->
        <ul class="list-group">
            ${posts.map(PostSummaryItem).join('')}
        </ul>
<!--    </div>-->
    `);
}

export default PostSummaryList;