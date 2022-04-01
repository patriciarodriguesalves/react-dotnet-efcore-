using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        public IEnumerable<Activity> Activities = new List<Activity>(){
                new Activity(1, "Tarefa1", "Cadastro de clientes","normal"),
                new Activity(2,"Tarefa2", "Cadastro de empresas","alta"),
                new Activity(3,"Tarefa3", "Cadastro de funcionarios","baixa")
            };

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return Activities;
        }

        [HttpGet("{id}")]
        public Activity Get(int id)
        {
            return Activities.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public IEnumerable<Activity> Post(Activity activity)
        {
            return Activities.Append<Activity>(activity);
        }


        [HttpPut("{id}")]
        public Activity Put(int id, Activity activity)
        {
            activity.Id += 5;
            return activity;
        }


        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Meu primeiro método Delete";
        }
    }
}