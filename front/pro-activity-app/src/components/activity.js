import React from "react";

export default function Activity(props) {
  function priorityLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function priorityEmoticon(param, icon) {
    switch (param) {
      case "1":
        return icon ? "smile" : "success";
      case "2":
        return icon ? "meh" : "warning";
      case "3":
        return icon ? "frown" : "danger";
      default:
        return "Não definido";
    }
  }

  return (
    <div
      className={
        "card mb-2 shadow-sm border-" + priorityEmoticon(props.item.priority)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{props.item.id}</span>-
            {props.item.title}
          </h5>
          <h6>
            Prioridade:
            <span
              className={"ms-1 text-" + priorityEmoticon(props.item.priority)}
            >
              <i
                className={
                  "me-1 fa-regular fa-face-" +
                  priorityEmoticon(props.item.priority, true)
                }
              ></i>
              {priorityLabel(props.item.priority)}
            </span>
          </h6>
        </div>

        <p className="card-text">{props.item.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.editActivity(props.item.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.deleteActivity(props.item.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
