import { useEffect, useMemo, useState } from "react";
import "./Adopt.css";

function BasketIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 10L4 21H20L18 10H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L12 3L15 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon({ className, filled }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-4.35-9.5-8.5C.4 9.2 2.1 5.8 5.7 5.2c1.9-.3 3.5.5 4.6 1.7 1.1-1.2 2.7-2 4.6-1.7 3.6.6 5.3 4 3.2 7.3C19 16.65 12 21 12 21Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AidIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 11h4M12 9v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DonateIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-4.35-9.5-8.5C.4 9.2 2.1 5.8 5.7 5.2c1.9-.3 3.5.5 4.6 1.7 1.1-1.2 2.7-2 4.6-1.7 3.6.6 5.3 4 3.2 7.3C19 16.65 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RescueIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8l8-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const fallbackPets = [
  // Dogs
  {
    id: 1,
    name: "Sheru",
    breed: "Indian Pariah",
    gender: "Male",
    age: "3 years",
    location: "Hingna Road",
    type: "dog",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.0968,
    lng: 78.9814,
  },
  {
    id: 2,
    name: "Rex",
    breed: "Labrador",
    gender: "Male",
    age: "2 years",
    location: "Sadar",
    type: "dog",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1456,
    lng: 79.0882,
  },
  {
    id: 3,
    name: "Luna",
    breed: "Golden Retriever",
    gender: "Female",
    age: "4 years",
    location: "Dharampeth",
    type: "dog",
    needsRescue: false,
    needsMedical: true,
    needsDonate: false,
    lat: 21.1523,
    lng: 79.0801,
  },
  {
    id: 4,
    name: "Max",
    breed: "German Shepherd",
    gender: "Male",
    age: "5 years",
    location: "Seminary Hills",
    type: "dog",
    needsRescue: true,
    needsMedical: false,
    needsDonate: true,
    lat: 21.1389,
    lng: 79.0654,
  },
  {
    id: 5,
    name: "Bella",
    breed: "Beagle",
    gender: "Female",
    age: "1 year",
    location: "Itwari",
    type: "dog",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1623,
    lng: 79.0923,
  },

  // Cats
  {
    id: 6,
    name: "Mimi",
    breed: "Persian Mix",
    gender: "Female",
    age: "2 years",
    location: "Sadar",
    type: "cat",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1456,
    lng: 79.0882,
  },
  {
    id: 7,
    name: "Whiskers",
    breed: "Siamese",
    gender: "Male",
    age: "3 years",
    location: "Futala",
    type: "cat",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1289,
    lng: 79.0456,
  },
  {
    id: 8,
    name: "Shadow",
    breed: "Maine Coon",
    gender: "Male",
    age: "4 years",
    location: "Dharampeth",
    type: "cat",
    needsRescue: false,
    needsMedical: true,
    needsDonate: false,
    lat: 21.1523,
    lng: 79.0801,
  },
  {
    id: 9,
    name: "Lily",
    breed: "British Shorthair",
    gender: "Female",
    age: "1 year",
    location: "Hingna Road",
    type: "cat",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.0968,
    lng: 78.9814,
  },

  // Squirrels
  {
    id: 10,
    name: "Chiku",
    breed: "Indian Palm Squirrel",
    gender: "Male",
    age: "6 months",
    location: "Seminary Hills",
    type: "squirrel",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1389,
    lng: 79.0654,
  },
  {
    id: 11,
    name: "Nibbles",
    breed: "Three-striped Squirrel",
    gender: "Female",
    age: "8 months",
    location: "Futala",
    type: "squirrel",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1289,
    lng: 79.0456,
  },

  // Goats
  {
    id: 12,
    name: "Balu",
    breed: "Desi Goat",
    gender: "Male",
    age: "2 years",
    location: "Itwari",
    type: "goat",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1623,
    lng: 79.0923,
  },
  {
    id: 13,
    name: "Chhaya",
    breed: "Jamnapari",
    gender: "Female",
    age: "3 years",
    location: "Hingna Road",
    type: "goat",
    needsRescue: false,
    needsMedical: true,
    needsDonate: true,
    lat: 21.0968,
    lng: 78.9814,
  },
  {
    id: 14,
    name: "Ramu",
    breed: "Barbari",
    gender: "Male",
    age: "1 year",
    location: "Sadar",
    type: "goat",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1456,
    lng: 79.0882,
  },

  // Horses
  {
    id: 15,
    name: "Badal",
    breed: "Pony",
    gender: "Male",
    age: "5 years",
    location: "Futala",
    type: "horse",
    needsRescue: false,
    needsMedical: true,
    needsDonate: false,
    lat: 21.1289,
    lng: 79.0456,
  },
  {
    id: 16,
    name: "Storm",
    breed: "Marwari",
    gender: "Male",
    age: "7 years",
    location: "Dharampeth",
    type: "horse",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.1523,
    lng: 79.0801,
  },
  {
    id: 17,
    name: "Princess",
    breed: "Arabian",
    gender: "Female",
    age: "4 years",
    location: "Seminary Hills",
    type: "horse",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1389,
    lng: 79.0654,
  },

  // Cows
  {
    id: 18,
    name: "Gauri",
    breed: "Desi Cow",
    gender: "Female",
    age: "6 years",
    location: "Dharampeth",
    type: "cow",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.1523,
    lng: 79.0801,
  },
  {
    id: 19,
    name: "Kamdhenu",
    breed: "Gir",
    gender: "Female",
    age: "8 years",
    location: "Hingna Road",
    type: "cow",
    needsRescue: false,
    needsMedical: true,
    needsDonate: false,
    lat: 21.0968,
    lng: 78.9814,
  },
  {
    id: 20,
    name: "Lakshmi",
    breed: "Sahiwal",
    gender: "Female",
    age: "5 years",
    location: "Itwari",
    type: "cow",
    needsRescue: true,
    needsMedical: false,
    needsDonate: true,
    lat: 21.1623,
    lng: 79.0923,
  },

  // Buffalo
  {
    id: 21,
    name: "Mahadev",
    breed: "Murrah",
    gender: "Male",
    age: "4 years",
    location: "Sadar",
    type: "buffalo",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1456,
    lng: 79.0882,
  },
  {
    id: 22,
    name: "Shakti",
    breed: "Nili-Ravi",
    gender: "Female",
    age: "6 years",
    location: "Futala",
    type: "buffalo",
    needsRescue: false,
    needsMedical: true,
    needsDonate: true,
    lat: 21.1289,
    lng: 79.0456,
  },

  // Ox
  {
    id: 23,
    name: "Bhim",
    breed: "Ongole",
    gender: "Male",
    age: "7 years",
    location: "Dharampeth",
    type: "ox",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1523,
    lng: 79.0801,
  },
  {
    id: 24,
    name: "Balram",
    breed: "Gir",
    gender: "Male",
    age: "9 years",
    location: "Seminary Hills",
    type: "ox",
    needsRescue: true,
    needsMedical: true,
    needsDonate: false,
    lat: 21.1389,
    lng: 79.0654,
  },

  // Camel
  {
    id: 25,
    name: "Sahara",
    breed: "Bikaneri",
    gender: "Male",
    age: "10 years",
    location: "Hingna Road",
    type: "camel",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.0968,
    lng: 78.9814,
  },

  // Desi Dogs
  {
    id: 26,
    name: "Kalu",
    breed: "Desi Dog",
    gender: "Male",
    age: "2 years",
    location: "Manewada",
    type: "dog",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.0968,
    lng: 79.029,
  },
  {
    id: 27,
    name: "Gudiya",
    breed: "Desi Dog",
    gender: "Female",
    age: "1.5 years",
    location: "Bardi",
    type: "dog",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.165,
    lng: 79.06,
  },

  // Desi Cats
  {
    id: 28,
    name: "Chutki",
    breed: "Desi Cat",
    gender: "Female",
    age: "1 year",
    location: "Jaripatka",
    type: "cat",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.18,
    lng: 79.08,
  },
  {
    id: 29,
    name: "Motu",
    breed: "Desi Cat",
    gender: "Male",
    age: "3 years",
    location: "Dharampeth",
    type: "cat",
    needsRescue: true,
    needsMedical: true,
    needsDonate: false,
    lat: 21.1523,
    lng: 79.0801,
  },

  // Desi Cows & Buffalo/Sheep
  {
    id: 30,
    name: "Nandini",
    breed: "Desi Cow",
    gender: "Female",
    age: "7 years",
    location: "Mhalgi Nagar",
    type: "cow",
    needsRescue: false,
    needsMedical: true,
    needsDonate: true,
    lat: 21.1,
    lng: 79.08,
  },
  {
    id: 31,
    name: "Bhola",
    breed: "Desi Bull",
    gender: "Male",
    age: "6 years",
    location: "Hudkeshwar",
    type: "ox",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.07,
    lng: 79.1,
  },

  // Pigs
  {
    id: 32,
    name: "Gulabo",
    breed: "Desi Pig",
    gender: "Female",
    age: "2 years",
    location: "Mankapur",
    type: "pig",
    needsRescue: false,
    needsMedical: false,
    needsDonate: true,
    lat: 21.19,
    lng: 79.1,
  },
  {
    id: 33,
    name: "Lallu",
    breed: "Desi Pig",
    gender: "Male",
    age: "3 years",
    location: "Sadar",
    type: "pig",
    needsRescue: true,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1456,
    lng: 79.0882,
  },

  // Sheep
  {
    id: 34,
    name: "Dholu",
    breed: "Desi Sheep",
    gender: "Male",
    age: "2 years",
    location: "Futala",
    type: "sheep",
    needsRescue: false,
    needsMedical: false,
    needsDonate: false,
    lat: 21.1289,
    lng: 79.0456,
  },
  {
    id: 35,
    name: "Bhuri",
    breed: "Desi Sheep",
    gender: "Female",
    age: "1.5 years",
    location: "Itwari",
    type: "sheep",
    needsRescue: true,
    needsMedical: false,
    needsDonate: true,
    lat: 21.1623,
    lng: 79.0923,
  },
];

function getImageSrcForPet(petId) {
  const imageIndex = ((petId - 1) % 30) + 1;
  return `/src/assets/image${imageIndex}.png`;
}

function Adopt() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [liked, setLiked] = useState(() => new Set());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/pets");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setPets(Array.isArray(data) ? data : fallbackPets);
        }
      } catch (e) {
        if (!cancelled) {
          setPets(fallbackPets);
          setError("Backend not reachable, showing local data.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const types = useMemo(() => {
    const s = new Set(pets.map((p) => p.type));
    return ["all", ...Array.from(s)];
  }, [pets]);

  const filteredPets = useMemo(() => {
    if (filter === "all") return pets;
    return pets.filter((p) => p.type === filter);
  }, [pets, filter]);

  async function handleAdopt(pet) {
    try {
      const res = await fetch("/api/adoptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petId: pet.id }),
      });
      if (!res.ok) throw new Error("adopt_failed");
      alert(`Adoption request submitted for ${pet.name}.`);
    } catch {
      alert(`Unable to submit adoption right now for ${pet.name}.`);
    }
  }

  async function handleToggleLike(pet) {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(pet.id)) next.delete(pet.id);
      else next.add(pet.id);
      return next;
    });

    try {
      await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petId: pet.id }),
      });
    } catch {
      // ignore
    }
  }

  async function handleAid(pet, kind) {
    try {
      const res = await fetch("/api/aid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petId: pet.id, kind }),
      });
      if (!res.ok) throw new Error("aid_failed");
      alert(`${kind} request submitted for ${pet.name}.`);
    } catch {
      alert(`Unable to submit ${kind} request right now for ${pet.name}.`);
    }
  }

  return (
    <div className="adoptPage">
      <div className="adoptHeader">
        <h1 className="adoptTitle">Adopt a Pet</h1>
        <p className="adoptSubtitle">
          Find your new friend. Light creamy theme with simple, clear actions.
        </p>

        {error ? <div className="adoptNotice">{error}</div> : null}

        <div className="adoptFilters" role="tablist" aria-label="Pet filters">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              className={`adoptChip ${filter === t ? "active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      <div className="adoptGrid">
        {loading ? (
          <div className="adoptLoading">Loading pets...</div>
        ) : (
          filteredPets.map((pet) => {
            const isLiked = liked.has(pet.id);
            return (
              <div key={pet.id} className="petCard">
                <div className="petImageWrap">
                  <img
                    className="petImage"
                    src={getImageSrcForPet(pet.id)}
                    alt={pet.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/src/assets/react.svg";
                    }}
                  />
                </div>

                <div className="petBody">
                  <div className="petTop">
                    <h3 className="petName">{pet.name}</h3>
                    <span className="petType">{pet.type}</span>
                  </div>

                  <div className="petMeta">
                    <div className="petMetaRow">
                      <span className="petMetaLabel">Breed</span>
                      <span className="petMetaValue">{pet.breed}</span>
                    </div>
                    <div className="petMetaRow">
                      <span className="petMetaLabel">Gender</span>
                      <span className="petMetaValue">{pet.gender}</span>
                    </div>
                    <div className="petMetaRow">
                      <span className="petMetaLabel">Age</span>
                      <span className="petMetaValue">{pet.age}</span>
                    </div>
                    <div className="petMetaRow">
                      <span className="petMetaLabel">Location</span>
                      <span className="petMetaValue">{pet.location}</span>
                    </div>
                  </div>

                  <div className="petActions">
                    <button
                      type="button"
                      className="btnPrimary"
                      onClick={() => handleAdopt(pet)}
                    >
                      <BasketIcon className="btnIcon" />
                      Adopt
                    </button>

                    <button
                      type="button"
                      className={`btnSecondary ${isLiked ? "liked" : ""}`}
                      onClick={() => handleToggleLike(pet)}
                      aria-pressed={isLiked}
                    >
                      <HeartIcon className="btnIcon" filled={isLiked} />
                      Like
                    </button>
                  </div>

                  {(pet.needsMedical || pet.needsDonate || pet.needsRescue) && (
                    <div className="petAid">
                      {pet.needsMedical && (
                        <button
                          type="button"
                          className="btnAid"
                          onClick={() => handleAid(pet, "Medical AID")}
                        >
                          <AidIcon className="btnIcon" />
                          Medical AID
                        </button>
                      )}

                      {pet.needsDonate && (
                        <button
                          type="button"
                          className="btnAid"
                          onClick={() => handleAid(pet, "Donation")}
                        >
                          <DonateIcon className="btnIcon" />
                          Donation
                        </button>
                      )}

                      {pet.needsRescue && (
                        <button
                          type="button"
                          className="btnAid"
                          onClick={() => handleAid(pet, "Rescue")}
                        >
                          <RescueIcon className="btnIcon" />
                          Rescue
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Adopt;
