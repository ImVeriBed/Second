using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace UniqueWebApp.Models
{
    [DataContract]
    public class Abonent
    {
        [DataMember]
        public string ACCOUNTCD { get; set; }
        [DataMember]
        public int STREETCD { get; set; }
        [DataMember]
        public int FLATNO { get; set; }
        [DataMember]
        public int HOUSENO { get; set; }
        [DataMember]
        public string FIO { get; set; }
        [DataMember]
        public string PHONE { get; set; }
    }

    public class AbonentModels
    {
        public static string path = "..\\UniqueWebApp\\wwwroot\\Abonents.json";

        public static void PostData(IEnumerable<Abonent> Ab)
        {
            string json = JsonHelper.JsonSerializer(Ab.ToList());
            File.WriteAllText(path, json);
        }
        public static List<Abonent> GetData()
        {
            string json = File.ReadAllText(path);
            return JsonHelper.JsonDeserialize<List<Abonent>>(json);
        }
    }

    public static class JsonHelper
    {
        /// <summary>
        /// JSON Сериализация
        /// </summary>
        public static string JsonSerializer<T>(T t)
        {
            DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(T));
            MemoryStream ms = new MemoryStream();
            ser.WriteObject(ms, t);
            string jsonString = Encoding.UTF8.GetString(ms.ToArray());
            ms.Close();
            return jsonString;
        }
        /// <summary>
        /// JSON Десериализация
        /// </summary>
        public static T JsonDeserialize<T>(string jsonString)
        {
            DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(T));
            MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(jsonString));
            T obj = (T)ser.ReadObject(ms);
            return obj;
        }
    }
}