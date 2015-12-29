using MessageBoard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MessageBoard.Controllers
{
    public class HomeController : Controller
    {
        private IMessageBoardRepository _repo;

        public HomeController(IMessageBoardRepository repo)
        {

            _repo = repo;

        }

        public ActionResult Index()
        {

            
            
            ViewBag.Title = "Home Page";

           


            return View();
        }

        public ActionResult Contact()
        {

            ViewBag.Title = "Contact Us";

            return View();
        
        }

    }
}
