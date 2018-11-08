using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularCore.Models;

namespace AngularCore.Controllers
{
    [Route("api/[controller]")]
    public class AbonentController : Controller
    {
        [HttpGet]
        public List<Abonent> Get()
        {
            return AbonentModels.GetData();
        }

        [HttpPost]
        public void Post([FromBody] Abonent ab)
        {
            if (ab == null) return;
            var abonents = AbonentModels.GetData(); // Получить данные
            abonents.Add(ab); // Добавить абонента
            AbonentModels.PostData(abonents); // Сохранить данные в файл
        }

        [HttpDelete("{accountCD}")] // Удалить запись
        public void Delete(string accountCD)
        {
            var abonents = AbonentModels.GetData();
            int ind = abonents.FindIndex(a => a.ACCOUNTCD == accountCD);
            abonents.RemoveAt(ind); // Удалить абонента
            AbonentModels.PostData(abonents); // Сохранить данные в файл
        }

        [HttpPut("{accountCD}")] // изменить запись
        public void Put(string accountCD, [FromBody] Abonent ab)
        {
            var abonents = AbonentModels.GetData();
            int ind = abonents.FindIndex(a => a.ACCOUNTCD == accountCD);
            abonents[ind] = ab; // изменить абонента
            AbonentModels.PostData(abonents); // Сохранить данные в файл
        }
    }
}
