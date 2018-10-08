using System.Collections.Generic;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace ASPNETWEBAPI.Controllers
{
    public class Person{
        public int Id { get; set; }
        public string Name { get; set; }
    }

    

    [EnableCors(origins: "http://192.168.99.1:8080", headers: "*", methods: "*")]
    public class HomeController : Controller
    {
        List<Person> People = new List<Person>()
        {
            new Person()
            {
                Id = 1,
                Name = "Julius"
            },
            new Person()
            {
                Id = 2,
                Name = "Faith Carmel"
            }
        };

        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        [HttpPost]
        public JsonResult Postter(string Name)
        {
            var xName = Request["name"];

            People.Add(new Person { Id = 3, Name = Name });
            var list = People;
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        
        public JsonResult Getter()
        {
            var list = People;

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
