using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace MessageBoard
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();


            config.Routes.MapHttpRoute(
                name: "replies",
                routeTemplate: "api/topics/{topicId}/replies/{id}",
                defaults: new {controller="replies", id = RouteParameter.Optional }
            );


            config.Routes.MapHttpRoute(
                name: "topics",
                routeTemplate: "api/topics/{id}",
                defaults: new {controller ="topics", id = RouteParameter.Optional }
            );

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().FirstOrDefault();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        
    }
}
