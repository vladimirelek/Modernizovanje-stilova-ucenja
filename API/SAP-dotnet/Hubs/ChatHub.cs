using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SAP_dotnet.Data;
using SAP_dotnet.Models;

namespace SAP_dotnet.Hubs
{
    public class ChatHub : Hub
    {
        private readonly StoreContext _storeContext;
        public ChatHub(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }
        public async Task NewMessage(string user, string message, int correctAnswer){
            var novoPitanje = new Pitanje{
                TacanOdgovor=correctAnswer
            };
            _storeContext.Pitanja.Add(novoPitanje);
            _storeContext.SaveChanges();
            var newQuestionId = _storeContext.Pitanja.Count();
            message += "|" + newQuestionId;
            await Clients.Others.SendAsync("messageReceived", user, message);
            
        }
        public async Task ResponseReceived(int answer, int question){
            await Clients.Others.SendAsync("responseReceived", answer);
            int correctAnswer = _storeContext.Pitanja.Find(question).TacanOdgovor;
            //ovdje implementirati logiku za dodavanje bodova studentima
        }
    }
    
}