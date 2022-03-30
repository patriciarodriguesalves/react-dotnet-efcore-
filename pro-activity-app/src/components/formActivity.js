import React, { useEffect, useState } from "react";


const initialActivity = {
  id: 0,
  title: "",
  priority: 0,
  description: "",
};

export default function FormActivity(props) {
  const [activity, setActivity] = useState(currentyActivity());

  useEffect(() => {
    if (props.selectedActivity.id !== 0) setActivity(props.selectedActivity);
  }, [props.selectedActivity]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.selectedActivity.id !== 0) {
      props.updateActivity(activity);
    } else {
      props.addActivity(activity);
    }

    setActivity(initialActivity);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    props.cancelActivity();

    setActivity(initialActivity);
  };

  function currentyActivity() {
    if (props.selectedActivity.id !== 0) {
      return props.selectedActivity;
    } else {
      return initialActivity;
    }
  }

  return (
    <>
      <h1>Atividade {activity.id !== 0 ? activity.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            id="title"
            name="title"
            value={activity.title}
            onChange={inputTextHandler}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            id="priority"
            name="priority"
            value={activity.priority}
            onChange={inputTextHandler}
            className="form-select"
          >
            <option value="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={activity.description}
            onChange={inputTextHandler}
            type="text"
            className="form-control"
          />
          <hr />
        </div>

        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fas fa-plus me-2"></i>
              Atividade
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={handleCancel}
              >
                <i className="fas fa-plus me-2"></i>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
