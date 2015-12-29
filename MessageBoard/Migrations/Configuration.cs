namespace MessageBoard.Migrations
{
    using MessageBoard.Data;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MessageBoard.Data.MessageBoardContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MessageBoard.Data.MessageBoardContext context)
        {
#if DEBUG
            if (context.Topics.Count() == 0)
            {
                var topic = new Topic()
                {
                    Title = "I love MVC",
                    Created = DateTime.Now,
                    Body = "I love ASP.NET MVC and I want everyone to know it",
                    Replies = new List<Reply>()
          {
            new Reply()
            {
               Body = "I love it too!",
               Created = DateTime.Now
            },
            new Reply()
            {
               Body = "Me too",
               Created = DateTime.Now
            },
            new Reply()
            {
               Body = "Aw shucks",
               Created = DateTime.Now
            },
          }
                };

                context.Topics.Add(topic);

                var anotherTopic = new Topic()
                {
                    Title = "I like Ruby too!",
                    Created = DateTime.Now,
                    Body = "Ruby on Rails is popular"
                };

                context.Topics.Add(anotherTopic);

                try
                {
                    context.SaveChanges();
                }
                catch (Exception ex)
                {
                    var msg = ex.Message;
                }
            }
#endif


        }
    }
}
