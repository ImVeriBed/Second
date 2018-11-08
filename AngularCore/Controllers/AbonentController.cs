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
            var abonents = AbonentModels.GetData(); // �������� ������
            abonents.Add(ab); // �������� ��������
            AbonentModels.PostData(abonents); // ��������� ������ � ����
        }

        [HttpDelete("{accountCD}")] // ������� ������
        public void Delete(string accountCD)
        {
            var abonents = AbonentModels.GetData();
            int ind = abonents.FindIndex(a => a.ACCOUNTCD == accountCD);
            abonents.RemoveAt(ind); // ������� ��������
            AbonentModels.PostData(abonents); // ��������� ������ � ����
        }

        [HttpPut("{accountCD}")] // �������� ������
        public void Put(string accountCD, [FromBody] Abonent ab)
        {
            var abonents = AbonentModels.GetData();
            int ind = abonents.FindIndex(a => a.ACCOUNTCD == accountCD);
            abonents[ind] = ab; // �������� ��������
            AbonentModels.PostData(abonents); // ��������� ������ � ����
        }
    }
}
