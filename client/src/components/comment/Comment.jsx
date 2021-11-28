import "./comment.css";
export default function Comment({ user }) {
  return (
    <>
      <div className="container2" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src={user.profilePic}
                alt="Image Description"
                style={{ marginLeft: "20px" }}
              />
              <textarea type="text" className="inputComment" />
              <input type="button" value="Bình Luận" className="comment" />
              <p className="nameUser">{user.username}</p>
              {/* <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">
                    {user.username}
                  </h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    5 ngày trước
                  </span>
                </div>
                <p>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container2" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7G9kJ5bJCS6MqZLpdqFsYarQvO_Bjy50yw&usqp=CAU"
                alt="Image Description"
              />
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">Vũ Vũ 176</h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    5 ngày trước
                  </span>
                </div>
                <p>
                  Rất cảm ơn bạn đã chia sẽ phim rất hay đến với mọi người cùng
                  xem thật là tuyệt vời luôn 👍👍🧑🏻
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src="data:image/png;base64,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"
                alt="Image Description"
              />
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">
                    Nông Ngọc Châu
                  </h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    1 tuần trước
                  </span>
                </div>
                <p>Hay tuyệt!!!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src="https://i.pinimg.com/564x/79/14/ab/7914ab8a02118e1e0c7e1345d9030f08--avatar-aang-change-.jpg"
                alt="Image Description"
              />
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">Noob Siber</h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    1 tuần trước
                  </span>
                </div>
                <p>Bao giờ phim này chiếu ở rạp vậy các bạn 😥? :(</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="media g-mb-30 media-comment">
              <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Image Description"
              />
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="g-mb-15">
                  <h5 className="h5 g-color-gray-dark-v1 mb-0">ducnam2411</h5>
                  <span className="g-color-gray-dark-v4 g-font-size-12">
                    5 ngày trước
                  </span>
                </div>
                <p>Bộ Phim thật tuyệt! Đón chờ tập mới ghê✔✔</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
