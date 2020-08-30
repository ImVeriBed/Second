using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniqueWebApp.Models;

namespace UniqueWebApp.Controllers
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
            if (accountCD != null && accountCD.ToLower() != "undefined")
            {
                abonents.Remove(abonents.FirstOrDefault(a => a.ACCOUNTCD == accountCD)); // ������� ��������
            }
            else
            {
                abonents.Remove(abonents.FirstOrDefault(a => a == null));
            }

            AbonentModels.PostData(abonents); // ��������� ������ � ����
        }

        [HttpPut("{accountCD}")] // �������� ������
        public void Put(string accountCD, [FromBody] Abonent ab)
        {
            if (ab is null || string.IsNullOrWhiteSpace(accountCD)) return;
            var abonents = AbonentModels.GetData();
            int ind = abonents.FindIndex(a => a.ACCOUNTCD == accountCD);
            abonents[ind] = ab; // �������� ��������
            AbonentModels.PostData(abonents); // ��������� ������ � ����
        }
    }
}
