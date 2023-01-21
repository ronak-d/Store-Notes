import React from "react";
import MainScreen from "../../MainScreen/MainScreen";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import notes from "../../Data/notes";
import Badge from "react-bootstrap/Badge";

const MyNotes = () => {
  function deleteHandler(id) {
    if (window.confirm("Are you sure you want to delete this note"));
  }

  return (
    <>
      <MainScreen title={"welcome back my son..."}>
        <Button variant="primary">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/createnotes"
          >
            Create New Note
          </Link>
        </Button>

        {notes.map((note, i) => (
          <Card style={{ margin: "15px" }}>
            <Card.Header style={{ display: "flex" }}>
              <div
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                {/* {note.title} */}
                <Badge style={{ padding: "10px", marginTop: "12px" }} bg="info">
                  {note.title}
                </Badge>
              </div>

              <div>
                <Button style={{ margin: "10px" }} variant="primary">
                  <Link
                    to="/mynotes/${note._id}"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Edit
                  </Link>
                </Button>
                <Button
                  style={{ margin: "10px" }}
                  variant="danger"
                  onClick={() => deleteHandler(note._id)}
                >
                  <Link
                    to=""
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Delete
                  </Link>
                </Button>
              </div>
            </Card.Header>

            <Card.Body>
              <Badge bg="success">{`Category -> ${note.category}`}</Badge>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">
                  Note Created at <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </MainScreen>
    </>
  );
};

export default MyNotes;
