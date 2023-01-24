import React, { useState } from "react";
import MainScreen from "../../MainScreen/MainScreen";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import notes from "../../Data/notes";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const MyNotes = () => {
  const [notes, setNotes] = useState(null);

  function deleteHandler(id) {
    if (
      window.confirm(`Are you sure you want to delete this note has id : ${id}`)
    );
  }

  const fetchNotes = async () => {
    try {
      console.log("Fetching notes...");
      await axios.get("/api/notes").then((e) => setNotes(e.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log("notes", notes);

  return (
    <>
      <MainScreen title={"welcome back my son..."}>
        <Button style={{ margin: "20px" }} variant="primary">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/createnotes"
          >
            Create New Note
          </Link>
        </Button>

        {notes?.map((note, i) => (
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {notes.title}
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
                  <Badge
                    style={{ padding: "10px", marginTop: "12px" }}
                    bg="info"
                  >
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
              </Accordion.Header>

              <Accordion.Body>
                <Badge bg="success">{`Category -> ${note.category}`}</Badge>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Note Created at <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>
    </>
  );
};

export default MyNotes;
