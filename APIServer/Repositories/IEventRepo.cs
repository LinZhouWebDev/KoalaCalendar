﻿using APIServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Repositories
{
    public interface IEventRepo
    {
        Task<IEnumerable<Event>> GetEvents(string calendarID, DateTime startTime, DateTime endTime);
        Task<string> CreateEvent(string calendarID, string eventName, DateTime startTime, DateTime endTime);
        Task<bool> UpdateEvent(string eventID, string eventName, DateTime startTime, DateTime endTime);
        Task<bool> DeleteEvent(string eventID);
        Task<Event> GetEventByID(string eventID);
    }
}