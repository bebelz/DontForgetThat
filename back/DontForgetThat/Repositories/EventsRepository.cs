using DontForgetThat.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DontForgetThat.Repositories
{
    public class EventsRepository
    {
        private EventsContext _context;

        public EventsRepository(EventsContext context)
        {
            _context = context;
        }

        public List<Event> GetAll()
        {
            return _context.Events.ToList();
        }

        public Event GetById(int id)
        {
            var ev = _context.Events
                .Include(e => e.Items)
                .FirstOrDefault(e => e.Id == id);

            if (ev == null)
            {
                throw new Exception("Not Found");
            }
            return ev;
        }

        public Event Create(Event ev)
        {
            Validate(ev);
            _context.Events.Add(ev);
            _context.SaveChanges();
            return ev;
        }

        public void Validate(Event ev)
        {
            if(ev.StartsOn == DateTime.MinValue)
            {
                ev.StartsOn = DateTime.Today;
            }
        }

        public EventItem GetItem(int eventId, int itemId)
        {
            var ev = GetById(eventId);
            var item = ev.Items.Find(i => i.Id == itemId);
            if(item == null)
            {
                throw new Exception("Not Found");
            }
            return item;
        }

        public void AddItem(int eventId, EventItem item)
        {
            var ev = GetById(eventId);

            if(ev.Items == null)
            {
                ev.Items = new List<EventItem>();
            }
            ev.Items.Add(item);
            _context.SaveChanges();
        }

        public void RemoveItem(int eventId, int itemId)
        {
            var ev = GetById(eventId);
            var item = GetItem(eventId, itemId);

            ev.Items.Remove(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var toRemove = _context.Events.Find(id);
            if (toRemove == null)
            {
                throw new Exception("Not Found");
            }

            _context.Events.Remove(toRemove);
            _context.SaveChanges();
        }
    }
}
