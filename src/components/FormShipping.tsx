import React, { useState } from "react";

const ShippingForm: React.FC = () => {
  const [shippingMethod, setShippingMethod] = useState("delivery");  // Estado para el método de envío
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
      <div style={styles.formContainer}>
        <div style={styles.form}>
          <h2 style={styles.heading}>Formulario Envio</h2>

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
                    Avenida/Calle:
                    <input type="text" style={styles.input} placeholder="Ejemplo: Avenida Siempre Viva" />
                  </label>
                  <label style={styles.label}>
                    Número:
                    <div style={styles.addressNumberGroup}>
                      <span>#</span>
                      <input type="text" style={styles.input} placeholder="Principal" />
                      <span>-</span>
                      <input type="text" style={styles.input} placeholder="Secundario" />
                    </div>
                  </label>
                  <label style={styles.label}>
                    Complemento de dirección:
                    <textarea style={{ ...styles.input, height: "80px" }} placeholder="Apartamento, Piso, etc." />
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
                      Avenida/Calle:
                      <input type="text" style={styles.input} placeholder="Ejemplo: Avenida Siempre Viva" />
                    </label>
                    <label style={styles.label}>
                      Número:
                      <div style={styles.addressNumberGroup}>
                        <input type="text" style={styles.input} placeholder="Número" />
                        <span>#</span>
                        <input type="text" style={styles.input} placeholder="Principal" />
                        <span>-</span>
                        <input type="text" style={styles.input} placeholder="Secundario" />
                      </div>
                    </label>
                    <label style={styles.label}>
                      Complemento de dirección:
                      <textarea style={{ ...styles.input, height: "80px" }} placeholder="Apartamento, Piso, etc." />
                    </label>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Centro de costos para recoger en tienda */}
          {shippingMethod === "pickup" && (
            <div style={styles.section}>
              <h3 style={styles.subHeading}>Puntos de Venta</h3>
              <label style={styles.label}>
                Seleccione la tienda:
                <select style={styles.input}>
                  <option value="">Seleccione uno...</option>
                  <option value="tienda1">Tienda 1 - Crra 17C #60-30</option>
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

        {/* Resumen de compra */}
        <div style={styles.columnRight}>
          <h3 style={styles.subHeading}>Resumen de Compra</h3>
          <div style={styles.purchaseSummary}>
            <p>
              <strong>1 Artículo</strong>
            </p>
            <div style={styles.productDetails}>
              <p style={styles.productName}>Koraza Blanco 2650 En Cuñete 5gl</p>
              <p>
                <strong>Cantidad:</strong> 1
              </p>
              <p>
                <strong>Precio:</strong> $409.160,00
              </p>
            </div>
            <hr style={styles.separator} />
            <p style={styles.total}>
              <strong>Total:</strong> $409.160,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
  },
  form: {
    flex: 2,
    marginRight: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  columnRight: {
    flex: 1,
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
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
    fontSize: "14px",
    color: "#555",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  radioGroup: {
    display: "flex",
    gap: "10px",
  },
  radioLabel: {
    fontSize: "14px",
  },
  radioInput: {
    marginRight: "5px",
  },
  checkbox: {
    marginRight: "10px",
  },
  addressNumberGroup: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  purchaseSummary: {
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
  },
  productDetails: {
    paddingBottom: "10px",
  },
  productName: {
    fontWeight: "bold",
  },
  separator: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "10px 0",
  },
  total: {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "right",
    color: "#000",
  },
};

export default ShippingForm;
