using DontForgetThat.Models;
using System;

namespace DontForgetThat.Repositories
{
    public class EventItemsRepository
    {
        private EventsContext _context;
        private EventsRepository _eventsRepository;

        public EventItemsRepository(EventsContext context)
        {
            _context = context;
            _eventsRepository = new EventsRepository(context);
        }

        public void Validate(EventItem item)
        {
            if (item.DueDate == DateTime.MinValue)
            {
                item.DueDate = DateTime.Today;
            }
        }

        public void MarkItemAsDone(int eventId, int itemId)
        {
            ChangeItemState(eventId, itemId, true);
        }

        public void MarkItemAsTodo(int eventId, int itemId)
        {
            ChangeItemState(eventId, itemId, false);
        }

        internal void ChangeItemState(int eventId, int itemId, bool itemState)
        {
            var item = _eventsRepository.GetItem(eventId, itemId);
            item.Done = itemState;
            _context.SaveChanges();
        }
    }
}
