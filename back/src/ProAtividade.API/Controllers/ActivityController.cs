using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly DataContext _context;
        public ActivityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return _context.Activities;
        }

        [HttpGet("{id}")]
        public Activity Get(int id)
        {
            return _context.Activities.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public IEnumerable<Activity> Post(Activity activity)
        {
            _context.Activities.Add(activity);

            if (_context.SaveChanges() > 0)
                return _context.Activities;
            else
                throw new Exception("Não foi possível adicionar uma atividade");
        }

        [HttpPut("{id}")]
        public Activity Put(int id, Activity activity)
        {
            if (activity.Id != id) throw new Exception("Tentativa de atualização da atividade errada");

            _context.Update(activity);
            if (_context.SaveChanges() > 0)
                return _context.Activities.FirstOrDefault(a => a.Id == id);
            else
                return new Activity();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var activity = _context.Activities.FirstOrDefault(a => a.Id == id);

            if (activity == null) throw new Exception("Tentativa de deletar uma atividade inexistente");

            _context.Remove(activity);

            return _context.SaveChanges() > 0;

        }
    }
}