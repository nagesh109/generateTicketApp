import React, { Component } from "react";
import { Input, Button, message } from "antd";

const styles = {
  height: "6%",
  padding: "3%",
};

export class TickectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketsList: [],
    };
  }

  onChange = (value, key) => {
    value = value + key;
    let regex4 = /[0-9]/g;
    let match4 = value.match(regex4);
    if (match4 !== null) {
      let trimedValue = "";
      match4.forEach((x) => {
        trimedValue = trimedValue + x;
      });
      value = trimedValue;
      if (value.startsWith("0") === false && value.length <= 6) {
        value = value;
      } else {
        value = value.substring(0, value.length - 1);
      }
    } else {
      value = value.substring(0, value.length - 1);
    }
    this.setState({ ticketValue: value });
  };

  saveTicket = (value) => {
    if (this.state.ticketsList.length < 5) {
      if (value !== undefined && value.length === 6) {
        let allTickets = this.state.ticketsList;
        allTickets.push(value);
        this.setState({ ticketsList: allTickets }, () => {
          this.onChange("", "");
          message.success("Ticket Generated Successfully");
        });
      } else {
        message.error("Ticket Number should be 6 digits");
      }
    } else {
      this.onChange("", "");
      message.warning("Ticket Limit Reached");
    }
  };

  betweenRandomNumber(min, max) {
    let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
    this.saveTicket(JSON.stringify(randomValue));
  }

  removeTicket(id) {
    let allTickets = this.state.ticketsList;
    allTickets.splice(id, 1);
    this.setState({ ticketsList: allTickets });
  }

  render() {
    const { ticketValue, ticketsList } = this.state;
    return (
      <div className="container">
        <div className="col-12 mt-5 text-align-center">
          <div className="ticketCard row shadow">
            <div className="col-6">
              <div className="row">
                <Input
                  className="col-12"
                  placeholder="Please Enter"
                  suffix={
                    <span
                      style={{
                        color: "red",
                        border: "1px red solid",
                        margin: "2px",
                        padding: "2px",
                        backgroundColor: "#ebd1c7",
                      }}
                    >
                      Enter 6 digits
                    </span>
                  }
                  value={this.state.ticketValue}
                  onChange={(e, value) => this.onChange(e.target.value, "")}
                  onPressEnter={(e, value) => this.handleGstValue(e, value)}
                />
              </div>
              <div className="row">
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "9")}
                >
                  9
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "8")}
                >
                  8
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "7")}
                >
                  7
                </Button>
              </div>
              <div className="row">
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "4")}
                >
                  4
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "5")}
                >
                  5
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "6")}
                >
                  6
                </Button>
              </div>
              <div className="row">
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "3")}
                >
                  3
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "2")}
                >
                  2
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "1")}
                >
                  1
                </Button>
              </div>
              <div className="row">
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) =>
                    this.onChange(
                      ticketValue.substr(0, ticketValue.length - 1),
                      ""
                    )
                  }
                >
                  <span>
                    <i className="fas fa-backspace"></i>
                  </span>
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange(ticketValue, "0")}
                >
                  0
                </Button>
                <Button
                  className="col-4"
                  style={styles}
                  onClick={(e) => this.onChange("", "")}
                >
                  <span>
                    <i className="fas fa-trash" style={{ color: "red" }}></i>
                  </span>
                </Button>
              </div>
              <div className="row">
                <Button
                  className="col-12"
                  style={styles}
                  onClick={(e) => this.saveTicket(ticketValue)}
                >
                  <i className="fas fa-plus">
                    <span>Add ticket</span>
                  </i>
                </Button>
              </div>
            </div>
            <div className="col-6">
              <h6 style={{ color: "white", textAlign: "center" }}>
                Click on Wheel to Generate Random Tickets
              </h6>
              <i
                className="fas fa-dharmachakra wheel"
                style={{
                  color: "white",
                  fontSize: "150px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10%",
                  marginBottom: "10%",
                  cursor: "pointer",
                }}
                onClick={(e) => this.betweenRandomNumber(100000, 999999)}
              ></i>
              <p
                style={{
                  color: "orange",
                  border: "1px orange solid",
                  margin: "12px",
                  padding: "2px",
                  backgroundColor: "#ebd1c7",
                  textAlign: "center",
                }}
              >
                Ticket Number Range: 100000 - 999999
              </p>
            </div>
          </div>
          <div className="col-12">
            <h6 style={{ color: "white", marginTop: "1%" }}>
              Your Selected Tickets:
            </h6>
            <>
              {ticketsList ? (
                <>
                  <div className="row">
                    {ticketsList.map((x, id) => (
                      <div className="tickets col-2" style={{ margin: "1%" }}>
                        <div className="row">
                          <p
                            className="col-6"
                            style={{
                              color: "blue",
                              border: "1px blue solid",
                              padding: "2px",
                              backgroundColor: "#ebd1c7",
                              margin: "auto",
                            }}
                          >
                            {`Ticket#${id + 1}`}
                          </p>
                          <i
                            className="fas fa-trash col-4"
                            style={{
                              color: "red",
                              float: "right",
                              cursor: "pointer",
                            }}
                            onClick={(e) => this.removeTicket(id)}
                          ></i>
                        </div>
                        <div className="row">
                          <span className="circle" style={{ marginLeft: "8%" }}>
                            {x[0]}
                          </span>
                          <span className="circle">{x[1]}</span>
                          <span className="circle">{x[2]}</span>
                          <span className="circle">{x[3]}</span>
                          <span className="circle">{x[4]}</span>
                          <span className="circle">{x[5]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default TickectForm;
