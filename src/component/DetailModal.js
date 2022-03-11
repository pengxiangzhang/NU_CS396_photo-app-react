import React, { useRef } from "react";

const DetailModal = ({ post, open, setOpen }) => {
  const openedModal = useRef(null);
  const closePostModal = () => {
    setOpen(false);
  };
  window.onclick = function (event) {
    if (event.target == openedModal.current) {
      closePostModal();
    }
  };
  document.addEventListener("keyup", logKey);
  function logKey(e) {
    if (e.keyCode == 27) {
      closePostModal();
    }
  }

  if (open) {
    return (
      <>
        <div id="postModal" className="modal" ref={openedModal}>
          <a
            className="closePostModal invisibleLink"
            onClick={closePostModal}
            href="#nolink"
          >
            &times;
          </a>
          <div className="modal-content">
            <div
              className="modalLeft"
              style={{ backgroundImage: `url("${post.image_url}")` }}
            ></div>
            <div className="modalRight">
              <div className="modalUser">
                <h3>
                  <img
                    alt={post.user.username + "Avatar"}
                    src={post.user.thumb_url}
                  />{" "}
                  {post.user.username}
                </h3>
              </div>
              <div className="commentDetailList">
                {post.comments.map((comments) => {
                  return (
                    <div className="commentDetail" key={comments.id}>
                      <div className="commentLeft">
                        <img
                          alt={comments.user.username + "Avatar"}
                          src={comments.user.thumb_url}
                        />
                      </div>
                      <div className="commentRight">
                        <a
                          className="far fa-heart fa-lg invisibleLink modalTab"
                          aria-checked="false"
                          aria-label="Like this comment"
                          href="#nolink"
                        ></a>
                      </div>
                      <div className="commentCenter">
                        <p>
                          <span className="username">
                            {comments.user.username}
                          </span>{" "}
                          {comments.text}
                        </p>
                        <p className="post_time">{comments.comment_time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return "";
  }
};

export default DetailModal;
