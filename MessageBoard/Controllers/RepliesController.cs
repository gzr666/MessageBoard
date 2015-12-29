using MessageBoard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MessageBoard.Controllers
{
    public class RepliesController : ApiController
    {
        private IMessageBoardRepository _repo;

        public RepliesController(IMessageBoardRepository repo)
        {
            _repo = repo;

        }


        public IHttpActionResult Get(int topicId)
        { 
        
            var replies = _repo.GetRepliesByTopic(topicId);
            if (replies == null)
            {
                return NotFound();

            }
            else {

                return Ok(replies);
            
            }
            
        
        }

        public IHttpActionResult Post(int topicId,[FromBody]Reply reply)
        {
            var topic = _repo.GetTopics().FirstOrDefault(t => t.Id == topicId);
            if (topic == null)
            {
                return BadRequest();

            }
            else {

                reply.Created = DateTime.Now;
                reply.TopicId = topicId;
                if (_repo.AddReply(reply) && _repo.Save())
                {

                    return CreatedAtRoute("replies", new { id = reply.Id }, reply);
                }
                else {

                    return BadRequest();
                
                }
            
            }

        
        
        }
    }
}
