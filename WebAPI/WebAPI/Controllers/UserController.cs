using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class UserController : ApiController
    {
        private CustomerDBEntities db = new CustomerDBEntities();

        // GET: api/User
        [ResponseType(typeof(User))]
        [Route("Api/User/UserLogin")]
        [HttpPost]
        public IHttpActionResult GetUser(User user)
        {
            db.Configuration.ProxyCreationEnabled = false;
            var obj = db.Users.Where(x => x.Username == user.Username && x.Password == user.Password).FirstOrDefault();
            //var entityObj = ObjectContext.GetObjectType(obj.GetType());
            
            if (obj == null)
            {
                return NotFound();
            }

            return Ok(obj);
        }
        
        // POST: api/User
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            // Will be validated from Angular

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.UserId }, user);
        }        

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }        
    }
}