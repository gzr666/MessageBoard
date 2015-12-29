using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MessageBoard.Data
{
    public class MessageBoardRepository : IMessageBoardRepository
    {
        private MessageBoardContext _context;


        public MessageBoardRepository(MessageBoardContext context)
        {
            _context = context;

        }

        public IQueryable<Topic> GetTopics()
        {
            var topics = _context.Topics;

            return topics;
        }

        public IQueryable<Topic> GetTopicsIncludeReplies()
        {
            try
            {
                var topics = _context.Topics.Include("Replies");
                return topics;
            }
            catch (Exception ex){
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return null;
            
            }

         
        }

        public IQueryable<Reply> GetRepliesByTopic(int topicId)
        {
            var replies = _context.Replies.Where(r => r.TopicId == topicId);
            return replies;
        }

        


        public bool Save()
        {
            try
            {
                return _context.SaveChanges() > 0;
            }
            catch (Exception ex)
            {

                return false;
            
            }
        }

        public bool AddTopic(Topic topic)
        {
            try
            {
                _context.Topics.Add(topic);
               
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool AddReply(Reply newReply)
        {
            try
            {
                _context.Replies.Add(newReply);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }




        
    }
}