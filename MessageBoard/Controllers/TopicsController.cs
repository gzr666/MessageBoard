using MessageBoard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using System.Web.Mvc;

namespace MessageBoard.Controllers
{
    [HandleError(ExceptionType = typeof(System.Data.DataException), View = "Error.html")]
    public class TopicsController : ApiController
    {
        private IMessageBoardRepository _repo;
        public TopicsController(IMessageBoardRepository repo)
        {
            _repo = repo; 

        }

        public IHttpActionResult Get(bool includeReplies = true,int page = 0, int pageSize = 2)

        {
            IEnumerable<Topic> topics;
            if (includeReplies)
            {
                try {

                

                    topics = _repo.GetTopicsIncludeReplies().OrderBy(t => t.Id);
                    var totalCount = topics.Count();
                    var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

                    var pager = topics
                                .Skip(pageSize * page)
                                .Take(pageSize)
                                .ToList();

                    var result = new { totalcount = totalCount,totalPages = totalPages,PageSize=pageSize, topics = pager };
                    return Ok(result);


                }
                
                catch (Exception ex)
                {
                    Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                    return BadRequest();
                
                }


                
            }
            else {

                topics = _repo.GetTopics().Take(10).ToList();
            
            }

            return Ok(topics);


        }

        

        public IHttpActionResult Post([FromBody]Topic topic)
        {
            topic.Created = DateTime.Now;

            if (_repo.AddTopic(topic) && _repo.Save())
            {
                return CreatedAtRoute("topics", new { id = topic.Id }, topic);

            }
            else {

                return BadRequest();
            
            }

        
        
        }

    }
}
