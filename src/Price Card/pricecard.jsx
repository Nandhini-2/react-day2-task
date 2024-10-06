/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.css";
import "./pricecard.css";

let PriceCard = ({ type, price, features }) => {
  return (
    <>
      <div className="card" id="container">
        <div className="card-header">
          {type}
          <div className="card-title">
            <strong>${price}/month</strong>
          </div>
        </div>

        {features.map((obj) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <p className="card-text">
              <div>
                {obj.available ? (
                  <div className="elements">
                    <img
                      className="checked"
                      src="https://www.shutterstock.com/shutterstock/photos/654663922/display_1500/stock-vector-check-mark-isolated-on-transparent-background-black-symbol-for-your-design-vector-illustration-654663922.jpg"
                    />
                    <p>{obj.name}</p>
                  </div>
                ) : (
                  <div className="elements">
                    <img
                      className="checked"
                      src="https://www.shutterstock.com/image-vector/cross-icon-delete-x-symbol-260nw-1185278125.jpg"
                    />
                    <p style={{ color: "grey" }}>{obj.name}</p>
                  </div>
                )}
              </div>
            </p>
          </div>
        ))}
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </>
  );
};

export default PriceCard;
