using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace ASPNETWEBAPI.Controllers
{
    [EnableCors(origins: "http://192.168.99.1:8080", headers: "*", methods: "*")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        
        public JsonResult Getter()
        {
            var list = new[] {
                new
                {
                    Id = 1,
                    Name = "Julius"
                },
                new
                {
                    Id = 2,
                    Name = "Faith Carmel"
                },
                new
                {
                    Id = 3,
                    Name = "Bacosa"
                },
                new
                {
                    Id = 4,
                    Name = "Barte"
                }
            };

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
