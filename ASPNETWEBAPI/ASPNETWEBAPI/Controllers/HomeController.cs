using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETWEBAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }


        public JsonResult Getter()
        {
            var list = new List<string>()
            {
                "Julius",
                "Faith Carmel",
                "Bacosa",
                "Barte"
            };

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
