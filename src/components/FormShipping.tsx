import React, { useState } from "react";

const ShippingForm: React.FC = () => {
  const [shippingMethod, setShippingMethod] = useState<string>(""); // Estado para el método de envío
  const [sameAsBilling, setSameAsBilling] = useState<boolean>(true); // Estado para el checkbox "Misma dirección de facturación"

  const handleShippingMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingMethod(event.target.value);
  };

  const handleCheckboxChange = () => {
    setSameAsBilling(!sameAsBilling); // Cambiar el estado del checkbox
  };

  const simulatedOptions = {
    departamentos: ["Antioquia", "Cundinamarca", "Valle del Cauca", "Santander", "Bolívar"],
    ciudades: ["Medellín", "Bogotá", "Cali", "Bucaramanga", "Cartagena"],
    barrios: ["Centro", "Poblado", "Envigado", "Usaquén", "Teusaquillo"]
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Shipping Form</h2>

      {/* Métodos de envío */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Métodos de envío</h3>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="shippingMethod"
              value="delivery"
              checked={shippingMethod === "delivery"}
              onChange={handleShippingMethodChange}
              style={styles.radioInput}
            />
            Envío a domicilio
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="shippingMethod"
              value="pickup"
              checked={shippingMethod === "pickup"}
              onChange={handleShippingMethodChange}
              style={styles.radioInput}
            />
            Recoger en tienda
          </label>
        </div>
      </div>

      {/* Información de contacto */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Información de contacto</h3>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Correo electrónico:
            <input type="email" style={styles.input} required />
          </label>
          <label style={styles.label}>
            Nombres:
            <input type="text" style={styles.input} required />
          </label>
          <label style={styles.label}>
            Apellidos:
            <input type="text" style={styles.input} required />
          </label>
          <label style={styles.label}>
            Tipo de identificación:
            <select style={styles.input}>
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="ce">Cédula de Extranjería</option>
              <option value="passport">Pasaporte</option>
            </select>
          </label>
          <label style={styles.label}>
            Número de identificación:
            <input type="text" style={styles.input} required />
          </label>
        </div>
      </div>

      {/* Dirección de envío y facturación */}
      {shippingMethod === "delivery" && (
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Dirección</h3>
          <div style={styles.inputGroup}>
            <label>
              <input
                type="checkbox"
                checked={sameAsBilling}
                onChange={handleCheckboxChange}
                style={styles.checkbox}
              />
              Usar la misma dirección para envío y facturación
            </label>

            {/* Dirección de facturación */}
            <div>
              <h4 style={styles.subHeading}>Dirección de Facturación</h4>
              <label style={styles.label}>
                Departamento:
                <select style={styles.input}>
                  {simulatedOptions.departamentos.map((dep, index) => (
                    <option key={index} value={dep}>{dep}</option>
                  ))}
                </select>
              </label>
              <label style={styles.label}>
                Ciudad:
                <select style={styles.input}>
                  {simulatedOptions.ciudades.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </label>
              <label style={styles.label}>
                Barrio:
                <select style={styles.input}>
                  {simulatedOptions.barrios.map((barrio, index) => (
                    <option key={index} value={barrio}>{barrio}</option>
                  ))}
                </select>
              </label>
              <label style={styles.label}>
                Dirección:
                <input type="text" style={styles.input} />
              </label>
            </div>

            {/* Dirección de envío (solo si no está marcada la opción de usar la misma dirección) */}
            {!sameAsBilling && (
              <div>
                <h4 style={styles.subHeading}>Dirección de Envío</h4>
                <label style={styles.label}>
                  Departamento:
                  <select style={styles.input}>
                    {simulatedOptions.departamentos.map((dep, index) => (
                      <option key={index} value={dep}>{dep}</option>
                    ))}
                  </select>
                </label>
                <label style={styles.label}>
                  Ciudad:
                  <select style={styles.input}>
                    {simulatedOptions.ciudades.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </label>
                <label style={styles.label}>
                  Barrio:
                  <select style={styles.input}>
                    {simulatedOptions.barrios.map((barrio, index) => (
                      <option key={index} value={barrio}>{barrio}</option>
                    ))}
                  </select>
                </label>
                <label style={styles.label}>
                  Dirección:
                  <input type="text" style={styles.input} />
                </label>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Centro de costos para recoger en tienda */}
      {shippingMethod === "pickup" && (
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Centro de Costos</h3>
          <label style={styles.label}>
            Seleccione el Centro de Costos:
            <select style={styles.input}>
              <option value="">Seleccione uno...</option>
              <option value="tienda1">Tienda 1 - Calle 123</option>
              <option value="tienda2">Tienda 2 - Carrera 45</option>
              <option value="tienda3">Tienda 3 - Avenida 67</option>
            </select>
          </label>
        </div>
      )}

      {/* Teléfono y comentarios */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Información adicional</h3>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Número de teléfono:
            <input type="tel" style={styles.input} />
          </label>
          <label style={styles.label}>
            Comentarios:
            <textarea rows={4} style={{ ...styles.input, height: "100px" }} />
          </label>
        </div>
      </div>
    </div>
  );
};

// Estilos
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  subHeading: {
    color: "#555",
    marginBottom: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
    fontSize: "14px",
  },
  checkbox: {
    marginRight: "10px",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  radioLabel: {
    fontSize: "14px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  radioInput: {
    accentColor: "#007bff",
  },
};

export default ShippingForm;
